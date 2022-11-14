import dns from 'dns'
export function TDNSReturnIp(url){
    dns.lookup(url, function (err, addresses, family) {
        console.log(addresses);
    });
}