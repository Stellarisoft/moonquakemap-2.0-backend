const ai = [
        {
                type: "Artificial Impact (12 LM)",
                id: "edeaef7c-c94d-4969-8d43-6d79ff7aa449",
                year: 69,
                month: 11,
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
                id: "ab6a0c14-fa6b-4b54-bc09-cc4e59754037",
                year: 70,
                month: 4,
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
                id: "91d195f2-5814-4d0e-a78c-c0f62476d4d7",
                year: 71,
                month: 2,
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
                id: "857bfb5d-8240-48aa-85c2-45e64eb0bd05",
                year: 71,
                month: 2,
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
                id: "5c2f979c-e8e4-4d4c-bb11-e91a385d1b8c",
                year: 71,
                month: 7,
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
                id: "c6d5ebf4-9df8-48a6-8e84-b34de409a5ac",
                year: 71,
                month: 8,
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
                id: "a0b0aea5-6c06-456a-9949-01c48cf7fa1a",
                year: 72,
                month: 12,
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
                id: "d6ab4c3d-0e09-4b18-8eae-5972c7fb9614",
                year: 72,
                month: 12,
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