const ai = [
    {
        type: "Artificial Impact (12 LM)",
        id: "a69f86e8-6a79-4aec-b581-03e285ce04cd",
        year: 69,
        day: 324,
        h: 22,
        m: 17,
        s: 17.7,
        lat: -3.94,
        long: -21.2,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (13 S-IVB)",
        id: "e231c310-c329-47cf-b416-bafb977202fd",
        year: 70,
        day: 105,
        h: 1,
        m: 9,
        s: 41,
        lat: -2.75,
        long: -27.86,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (14 S-IVB)",
        id: "e0768b89-7057-4218-8514-ec91fd92d217",
        year: 71,
        day: 35,
        h: 7,
        m: 40,
        s: 55.4,
        lat: -8.09,
        long: -26.02,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (14 LM)",
        id: "c1d4a13b-f9a4-4693-8ec2-4b6ccbb1591b",
        year: 71,
        day: 38,
        h: 0,
        m: 45,
        s: 26.7,
        lat: -3.42,
        long: -19.67,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (15 S-IVB)",
        id: "b49d7796-a7c1-45b9-8092-10ff1bb0a326",
        year: 71,
        day: 210,
        h: 20,
        m: 58,
        s: 42.9,
        lat: -1.51,
        long: -11.81,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (15 LM)",
        id: "5bfc6404-8819-4b5a-98ac-4711c38e0242",
        year: 71,
        day: 215,
        h: 3,
        m: 3,
        s: 37,
        lat: 26.36,
        long: 0.25,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (17 S-IVB)",
        id: "20a51d6b-266d-4a9f-bbe4-39bd2f330813",
        year: 72,
        day: 345,
        h: 20,
        m: 32,
        s: 42.3,
        lat: -4.21,
        long: -12.31,
        mag: "N/A (AI)"
    },
    {
        type: "Artificial Impact (17 LM)",
        id: "62c3afd2-7d7d-487f-95d3-532aca73d89b",
        year: 72,
        day: 350,
        h: 6,
        m: 50,
        s: 20.8,
        lat: 19.99,
        long: 30.51,
        mag: "N/A (AI)"
    },
]

export const getAllAi = () => {
    return ai;
}

export const getAiById = (id: string) => {
    const aiEvent = ai.find((a) => a.id == id)
    return aiEvent == undefined ? "No AI found with that ID." : aiEvent;
}