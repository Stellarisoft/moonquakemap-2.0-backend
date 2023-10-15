const ai = [

        {
                type: "Artificial Impact (12 LM)",
                id: "73c8812b-b288-4311-9a04-3e4212a09e15",
                year: 1969,
                month: 11,
                day: 20,
                h: 22,
                m: 17,
                s: 17.7,
                lat: -3.94,
                long: -21.2,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (13 S-IVB)",
                id: "45a9330d-dea3-4594-b1b9-86731b61f9e3",
                year: 1970,
                month: 4,
                day: 15,
                h: 1,
                m: 9,
                s: 41,
                lat: -2.75,
                long: -27.86,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (14 S-IVB)",
                id: "3da86efb-7b4c-4422-96f8-75439c133c18",
                year: 1971,
                month: 2,
                day: 4,
                h: 7,
                m: 40,
                s: 55.4,
                lat: -8.09,
                long: -26.02,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (14 LM)",
                id: "661b1be1-aae1-4e63-916c-a4c7130f0f13",
                year: 1971,
                month: 2,
                day: 7,
                h: 0,
                m: 45,
                s: 26.7,
                lat: -3.42,
                long: -19.67,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (15 S-IVB)",
                id: "5a8e0ecc-21f3-410f-b627-e20f8567e9d8",
                year: 1971,
                month: 7,
                day: 29,
                h: 20,
                m: 58,
                s: 42.9,
                lat: -1.51,
                long: -11.81,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (15 LM)",
                id: "79f3e6d7-779a-4906-80bf-8036f012dac3",
                year: 1971,
                month: 8,
                day: 3,
                h: 3,
                m: 3,
                s: 37,
                lat: 26.36,
                long: 0.25,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (17 S-IVB)",
                id: "453c9393-e2f9-4901-97b4-85ab7003a5ce",
                year: 1972,
                month: 12,
                day: 10,
                h: 20,
                m: 32,
                s: 42.3,
                lat: -4.21,
                long: -12.31,
                mag: "N/A (AI)"
        },
        {
                type: "Artificial Impact (17 LM)",
                id: "83e69a3b-872d-481b-ad9d-54601a3f11af",
                year: 1972,
                month: 12,
                day: 15,
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