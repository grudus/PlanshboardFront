const mockGames = [
    {id: 1, name: "Agricola"},
    {id: 2, name: "Pędzące żółwie"},
    {id: 3, name: "Osadnicy"}
];

const initialState = {
  allGames: mockGames,
  currentGame: {},
};

export default (state = initialState, action) => {
    return state;
}