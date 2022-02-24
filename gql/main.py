from ariadne import gql, load_schema_from_path, graphql_sync
from flask import Flask, jsonify, request
from schema.create import create_schema
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)


@app.route('/gql', methods=["GET"])
def send_error():
    return {
               "success": False,
               "error": "get request are not allowed on this endpoint"
           }, 400


@app.route('/gql', methods=["POST"])
def graphql_server():
    data = request.get_json()

    schema = create_schema()
    success, result = graphql_sync(schema, data, context_value=request, debug=app.debug)

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True, port=3001)
