/**
 * Regex delete matcher 
 * 
 * Any elements with attributes matching this regex will be deleted. 
 */
reg_delete_str = ""
reg_delete_str += "(paywall)"; //generic (first found in boston globe)
reg_delete_str += "|(gateway-content)"; //bloomberg
reg_delete_str += "|(wsw__wg_jzalcb)"; //nytimes 

/**
 * Regex edit matcher
 * 
 * Any attributes matching this regex will be deleted, but the element will be kept. 
 */
reg_edit_str = ""
reg_edit_str += "|(css-mcm29f)"; //nytimes 

const paywall_delete_regex = new RegExp(reg_delete_str); 
const paywall_edit_regex = new RegExp(reg_edit_str); 
const all_elements = document.getElementsByTagName("*");

for (const element of all_elements) {
    try {
        //Remove classes that might have to do with paywall
        const element_classes = element.className.split(" "); 
        if (element_classes.filter((class_name) => paywall_delete_regex.test(class_name)).length !== 0) {
            element.parentNode.removeChild(element); 
        } 

        //Remove attributes that might have to do with paywall 
        const element_attributes = element.attributes; 
        for (const attr of element_attributes) {
            //Remove the attribute if the name has to do with a paywall
            if (paywall_edit_regex.test(attr.name) | paywall_edit_regex.test(attr.value)) {
                element.removeAttribute(attr.name); 
            }
            //Remove entire element if an attribute is set to a paywall
            if (paywall_delete_regex.test(attr.value)) {
                try {
                    element.parentNode.removeChild(element); 
                } catch (error) {}
            }
        }
    } catch (error) {}
}

//Remove all scroll blocks on the page 
try {
    const scroll_block_name_regex = new RegExp("(overflow)|(position)|(height)"); 
    const body_style_parts = document.body.getAttribute("style").split(";"); 
    let safe_parts = body_style_parts.filter((part) => !scroll_block_name_regex.test(part)); 
    document.body.setAttribute("style", safe_parts.join(";"));

    const doc_style_parts = document.getAttribute("style").split(";"); 
    doc_safe_parts = doc_style_parts.filter((part) => !scroll_block_name_regex.test(part)); 
    document.setAttribute("style", doc_safe_parts.join(";"));
} catch (error) {}
