import {orderBy} from "lodash";

const inject = (items, sections) => {
    const orderedSections = orderBy(sections, "index", "asc");

    let count = 0;

    orderedSections.forEach((section) => {
        let {content, index} = section;
        items.splice(index + count, 0, content);
        count++;
    })
    return items;
}

export {inject}