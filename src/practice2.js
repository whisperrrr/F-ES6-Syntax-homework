const inject = (items, sections) => {
    let count = 0;
    sections.forEach((section) => {
        let {content, index} = section;
        items.splice(index + count, 0, content);
        count++;
    })
    return items;
}

export {inject}