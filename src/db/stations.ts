const stations = [
    {
        id: "a11",
        mission: "Apollo 11",
        lat: 0.67337,
        long: 23.473146,
        startYear: 1969,
        startMonth: 7,
        startDay: 21,
        endYear: 1969,
        endMonth: 8,
        endDay: 26
    },
    {
        id: "a12",
        mission: "Apollo 12",
        lat: -3.01084,
        long: -23.42456,
        startYear: 1969,
        startMonth: 11,
        startDay: 19,
        endYear: 1977,
        endMonth: 9,
        endDay: 30
    },
    {
        id: "a14",
        mission: "Apollo 14",
        lat: -3.6445,
        long: -17.47753,
        startYear: 1971,
        startMonth: 2,
        startDay: 5,
        endYear: 1977,
        endMonth: 9,
        endDay: 30
    },
    {
        id: "a15",
        mission: "Apollo 15",
        lat: 26.13407,
        long: 3.62981,
        startYear: 1971,
        startMonth: 7,
        startDay: 31,
        endYear: 1977,
        endMonth: 9,
        endDay: 30
    },
    {
        id: "a16",
        mission: "Apollo 16",
        lat: -8.97577,
        long: 23.473146,
        startYear: 1972,
        startMonth: 4,
        startDay: 21,
        endYear: 1977,
        endMonth: 9,
        endDay: 30
    },
]

export const getAllStations = () => {
    return stations;
}

export const getStationById = (id: string) => {
    const station = stations.find((station) => station.id == id)
    return station == undefined ? "No station found with that ID." : station;
}