export const ABI = {"address":"0xc40c1ebf2a95cddafe2bc464dc2e5e49233a28412806be90f09e9aeaacbbf4b5","name":"launchpad","friends":[],"exposed_functions":[{"name":"create_fa","visibility":"public","is_entry":true,"is_view":false,"generic_type_params":[],"params":["&signer","0x1::option::Option<u128>","0x1::string::String","0x1::string::String","u8","0x1::string::String","0x1::string::String"],"return":[]},{"name":"get_balance","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":["address","address"],"return":["u64"]},{"name":"get_current_supply","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":["address"],"return":["u128"]},{"name":"get_max_supply","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":["address"],"return":["u128"]},{"name":"get_metadata","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":["address"],"return":["0x1::string::String","0x1::string::String","u8"]},{"name":"get_registry","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":[],"return":["vector<address>"]},{"name":"get_registry_obj_address","visibility":"public","is_entry":false,"is_view":true,"generic_type_params":[],"params":[],"return":["address"]},{"name":"mint_fa","visibility":"public","is_entry":true,"is_view":false,"generic_type_params":[],"params":["&signer","address","u64"],"return":[]}],"structs":[{"name":"CraeteFAEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[],"fields":[{"name":"creator_addr","type":"address"},{"name":"fa_obj_addr","type":"address"},{"name":"max_supply","type":"0x1::option::Option<u128>"},{"name":"name","type":"0x1::string::String"},{"name":"symbol","type":"0x1::string::String"},{"name":"decimals","type":"u8"},{"name":"icon_uri","type":"0x1::string::String"},{"name":"project_uri","type":"0x1::string::String"}]},{"name":"FAController","is_native":false,"abilities":["key"],"generic_type_params":[],"fields":[{"name":"mint_ref","type":"0x1::fungible_asset::MintRef"},{"name":"burn_ref","type":"0x1::fungible_asset::BurnRef"},{"name":"transfer_ref","type":"0x1::fungible_asset::TransferRef"}]},{"name":"MintFAEvent","is_native":false,"abilities":["drop","store"],"generic_type_params":[],"fields":[{"name":"fa_obj_addr","type":"address"},{"name":"amount","type":"u64"},{"name":"recipient_addr","type":"address"}]},{"name":"Registry","is_native":false,"abilities":["key"],"generic_type_params":[],"fields":[{"name":"fa_obj_addresses","type":"vector<address>"}]}]} as const
