const stations = [
    {
        id: "a11",
        mission: "Apollo 11",
        lat: 0.67337,
        long: 23.473146,
        startTime: '1969-07-21',
        endTime: '1969-08-26'
    },
    {
        id: "a12",
        mission: "Apollo 12",
        lat: -3.01084,
        long: -23.42456,
        startTime: '1969-11-19',
        endTime: '1977-09-30'
    },
    {
        id: "a14",
        mission: "Apollo 14",
        lat: -3.6445,
        long: -17.47753,
        startTime: '1971-02-05',
        endTime: '1977-09-30'
    },
    {
        id: "a15",
        mission: "Apollo 15",
        lat: 26.13407,
        long: 3.62981,
        startTime: '1971-07-31',
        endTime: '1977-09-30'
    },
    {
        id: "a16",
        mission: "Apollo 16",
        lat: -8.97577,
        long: 23.473146,
        startTime: '1972-04-21',
        endTime: '1977-09-30'
    },
]

export const getAllStations = () => {
    return stations;
}

export const getStationById = (id: string) => {
    const station = stations.find((station) => station.id == id)
    return station == undefined ? "No station found with that ID." : station;
}