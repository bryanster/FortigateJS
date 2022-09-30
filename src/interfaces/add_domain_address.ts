/**
 * add domain address
 * @param name - name of the address
 * @param type - type of the address
 * @param subnet - subnet of the address (only required if type is subnet)
 * @param fqdn - fqdn of the address (only required if type is fqdn)
 * @param comment - comment for the address (optional)
 */

interface add_domain_address {
  name: string;
  type: add_domain_type;
  fqdn?: string;
  subnbr?: string;
  comment?: string;

}
