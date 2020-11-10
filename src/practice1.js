const parseData = (input) => {
    let {data: dataList, column: columnList} = input;
    return dataList.map((data) => {
        return data.reduce((result, dataItem, index) => {
            result[columnList[index].name] = dataItem;
            return result;
        }, {})
    })
};

export {parseData};
