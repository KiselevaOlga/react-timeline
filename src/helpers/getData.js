const  getData = async () => {
    let itemsData = [];
    const response = await fetch(`/api/timelineData.json`);
    let itemsArray = await response.json();
    itemsArray.forEach(item => itemsData.push(item));
    return [...itemsData]
}

export default getData;