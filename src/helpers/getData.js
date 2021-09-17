// getData is a utility function that handles API call logic

const  getData = async () => {
    const response = await fetch(`/api/timelineData.json`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let itemsArray = await response.json();
    return [...itemsArray]
}

export default getData;