
async function main(){
    var fortigate1 = new fortigateapi("wf8jbbxGcnp9G7jf7Nw4s1QpmNq0fb", "192.168.2.240")
    const addrsrc = fs.readFileSync('./payloads/blacklistdom.json')
    var addr = JSON.parse(addrsrc);
    var blacklist = await getblacklist()
    var yeet = blacklist.split('\n')
    var group = fs.readFileSync("./payloads/blacklistgrp.json")
    console.log(await fortigate1.createAddrgrp(group).then((addr) =>{
        console.log(addr)
    }).catch(err =>{
        console.log(err)
    }))
    var bgrp = JSON.parse(group)
    var grp = []
    await yeet.forEach(element => {
        if (element !== ""){
            addr.name = element
            addr.fqdn = element
            console.log(element)
            grp.push({"name": `${element}`})
            fortigate1.createAddr(JSON.stringify(addr)).then((addr) =>{
                console.log(addr)
            }).catch(err =>{
                console.log(err)
            })
        }
        
    
    });
    bgrp.member = grp
    console.log(JSON.stringify(bgrp))
    fortigate1.updateAddrgrp('blacklist', JSON.stringify(bgrp)).then((addr) =>{
        console.log(addr)
    }).catch(err =>{
        console.log(err)
    })
}
main()
// getblacklist()

function getblacklist(){
    var data = fs.readFileSync('./domainlist.txt', 'utf-8')
    console.log(data)
    return data
}
// function getblacklist(){
//     var config = {
//         method: 'get',
//         url: 'https://raw.githubusercontent.com/bryanster/blacklist/main/blacklist',
//         headers: { }
//       };
      
//       return axios(config)
//     }