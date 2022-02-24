from typing import List


class Command:
    name: str
    count: int
    required_permissions: int
    description: str
    required_parameters: List[str]
    optional_parameters: List[str]
    id: int

    def __init__(self, raw_info):
        name, count, required_permissions, description, required_parameters, optional_parameters, command_id = raw_info
        self.name = name
        self.count = count
        self.required_permissions = required_permissions
        self.description = description
        self.required_parameters = required_parameters.split(" ")
        self.optional_parameters = optional_parameters.split(" ")
        self.id = command_id
