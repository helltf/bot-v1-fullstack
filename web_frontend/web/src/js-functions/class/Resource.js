export class Resource{
    static ok(data){
        return{
            data,
            success: true,
            error: null
        }
    }
    static error(errormessage){
        return{
            error: errormessage,
            success: false,
            data: null
        }
    }
}
