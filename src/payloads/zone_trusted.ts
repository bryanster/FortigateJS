interface zone_trusted {
    name: string,
    q_origin_key: string,
    tagging: [],
    description?: "",
    intrazone: "allow"  "deny",
    "interface": [
        {
            "interface-name": String,
            "q_origin_key": string,
        }, {
            "interface-name": "server",
            "q_origin_key": "server"
        }
    ]
}
