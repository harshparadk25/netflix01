import { createSlice } from "@reduxjs/toolkit";

const movieSlice  = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideos = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies , addTopRatedMovies,addUpcomingMovies} =movieSlice.actions;

export default movieSlice.reducer;