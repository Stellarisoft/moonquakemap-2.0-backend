import { NextResponse } from "next/server"

const sm = [
    {
        type: "Shallow moonquake",
        id: "6631340e-f3b1-4f58-b293-9152b0eaafad",
        date: 40744855.0,
        lat: 48,
        long: 35,
        mag: 2.8
    },
    {
        type: "Shallow moonquake",
        id: "30ab5184-9cac-473d-8c93-6d9944723495",
        date: 43633510.0,
        lat: 42,
        long: -24,
        mag: 2
    },
    {
        type: "Shallow moonquake",
        id: "7113ffbe-9745-4e2d-ac42-9f7d3d852866",
        date: 48111885.0,
        lat: 43,
        long: -47,
        mag: 1.9
    },
    {
        type: "Shallow moonquake",
        id: "b709a8d6-1c0e-44ad-8c2d-c0d3933fa4f9",
        date: 63264580.0,
        lat: 54,
        long: 101,
        mag: 1.9
    },
    {
        type: "Shallow moonquake",
        id: "f427f089-b79b-4862-9d35-93136cad7834",
        date: 85613755.0,
        lat: 12,
        long: 46,
        mag: 1
    },
    {
        type: "Shallow moonquake",
        id: "bfa9e64e-9778-4e89-829f-0f98cf5dbc66",
        date: 92556500.0,
        lat: 51,
        long: 45,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        id: "a3945e0c-f308-4f0c-be62-38372046c2cf",
        date: 92746215.0,
        lat: -20,
        long: -80,
        mag: 1.2
    },
    {
        type: "Shallow moonquake",
        id: "38333295-50c9-4719-84ee-fa41c73b7f8c",
        date: 98085130.0,
        lat: 33,
        long: 35,
        mag: 0.8
    },
    {
        type: "Shallow moonquake",
        id: "30b9754b-67ca-4699-85cb-f203221fa541",
        date: 100882590.0,
        lat: -84,
        long: -134,
        mag: 3.2
    },
    {
        type: "Shallow moonquake",
        id: "e40a016b-1ad1-460a-9b48-b17d2fdc99a1",
        date: 109480920.0,
        lat: -1,
        long: -71,
        mag: 2.2
    },
    {
        type: "Shallow moonquake",
        id: "d22b4b92-e125-4240-a0a5-72e55ba913df",
        date: 118321080.0,
        lat: -37,
        long: -29,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        id: "a99e5d01-70af-47c8-8d7e-2dff6428a523",
        date: 130911410.0,
        lat: 36,
        long: -16,
        mag: 0.7
    },
    {
        type: "Shallow moonquake",
        id: "fb317127-cb19-4398-b0c6-f79758a1cbb6",
        date: 133632660.0,
        lat: -48,
        long: -106,
        mag: 1.6
    },
    {
        type: "Shallow moonquake",
        id: "3842b482-43f0-4778-8e30-7bdf3f58aef4",
        date: 135635715.0,
        lat: -37,
        long: 42,
        mag: 0.9
    },
    {
        type: "Shallow moonquake",
        id: "41637af8-860f-4d48-839e-a555a2705de8",
        date: 142760790.0,
        lat: 21,
        long: 88,
        mag: 2.7
    },
    {
        type: "Shallow moonquake",
        id: "223393be-a679-4de8-980e-aae8d2c4c7b4",
        date: 157970520.0,
        lat: 29,
        long: -98,
        mag: 3.2
    },
    {
        type: "Shallow moonquake",
        id: "0cc8f832-0a7e-49c2-b78a-7de312e3d49b",
        date: 158753650.0,
        lat: 75,
        long: 40,
        mag: 1.7
    },
    {
        type: "Shallow moonquake",
        id: "ad342c14-d1e0-4a96-ad4b-ea2a2ccce83d",
        date: 158829980.0,
        lat: -2,
        long: -51,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        id: "384d9735-e668-4bde-b986-8817d195a4f3",
        date: 161586230.0,
        lat: -19,
        long: -26,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        id: "fda077b2-8115-41a9-8af2-5d5b70dd9b55",
        date: 168701825.0,
        lat: -49,
        long: -45,
        mag: 1.3
    },
    {
        type: "Shallow moonquake",
        id: "106139cd-e53c-4496-bf91-aa8153eb70d3",
        date: 170490540.0,
        lat: 3,
        long: -58,
        mag: 1.4
    },
    {
        type: "Shallow moonquake",
        id: "c22e563d-3c52-48f2-87fe-b4a47e1ce423",
        date: 184863175.0,
        lat: -8,
        long: 64,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        id: "ae5f7b08-9248-4970-a9ce-40e4fecd7a6b",
        date: 189627535.0,
        lat: 50,
        long: 30,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        id: "9c55b0f2-8d8d-4102-babb-373238209916",
        date: 190307885.0,
        lat: 38,
        long: 44,
        mag: 1.1
    },
    {
        type: "Shallow moonquake",
        id: "b5529653-b922-4fde-a3fc-8d2a0f7c33ed",
        date: 194980360.0,
        lat: 50,
        long: -20,
        mag: 2.3
    },
    {
        type: "Shallow moonquake",
        id: "b94a1636-b8de-4577-a94e-8bc28f832521",
        date: 195169330.0,
        lat: -19,
        long: -12,
        mag: 1.8
    },
    {
        type: "Shallow moonquake",
        id: "4dfba247-fcb8-4e11-9349-0cc98c8d9743",
        date: 201123160.0,
        lat: 77,
        long: -10,
        mag: 1.5
    },
]
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

export const GET = async (req: Request) => {
    try {
        return NextResponse.json({ sm: sm, ai: ai }, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    }
}