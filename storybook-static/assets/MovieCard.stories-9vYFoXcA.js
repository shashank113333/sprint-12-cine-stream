import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DxpYTUu8.js";import{d as n,i as r,l as i,r as a,u as o}from"./favoritesSlice-BBbAfk93.js";import{O as s}from"./iframe-Dj6t1JFV.js";import{n as c,t as l}from"./film-DvcUjR7v.js";import{i as u,n as d,r as f,t as p}from"./link-pFWG-Auj.js";import{n as m,t as h}from"./star-CsqySEPV.js";var g,_;function v(){return(v=e((()=>{g=`https://image.tmdb.org/t/p/w500`,_=e=>!e||e===`N/A`?null:e.startsWith(`http`)?e:`${g}${e}`})))()}var y,b,x;function S(){return(S=e((()=>{y=s(),b=t(),p(),u(),m(),c(),v(),i(),a(),x=({movie:e})=>{let[t,i]=(0,b.useState)(!1),a=o(),s=n(e=>e.favorites?.items||[]),c=e?.id||e?.imdbID,u=s.some(e=>e.id===c),p=_(e?.poster_path),m=e?.release_date?new Date(e.release_date).getFullYear()||String(e.release_date).substring(0,4):`N/A`,g=typeof e?.vote_average==`number`?e.vote_average.toFixed(1):`NR`;return c?(0,y.jsx)(`div`,{className:`movie-card`,children:(0,y.jsxs)(d,{href:`/movie/${c}`,prefetch:!0,"aria-label":`View details for ${e?.title||`movie`}`,style:{display:`flex`,flexDirection:`column`,height:`100%`,textDecoration:`none`,color:`inherit`},children:[(0,y.jsxs)(`div`,{className:`poster-container`,children:[p&&!t?(0,y.jsx)(`img`,{src:p,alt:`${e?.title||`Movie`} Official Poster`,width:`500`,height:`750`,loading:`lazy`,decoding:`async`,className:`movie-poster`,onError:()=>i(!0)}):(0,y.jsxs)(`div`,{className:`fallback-poster`,"aria-label":`Poster not available`,children:[(0,y.jsx)(l,{size:36,className:`fallback-icon`}),(0,y.jsx)(`span`,{className:`fallback-title`,children:e?.title}),(0,y.jsx)(`span`,{className:`fallback-text`,children:`No Poster Available`})]}),(0,y.jsx)(`button`,{onClick:t=>{t.preventDefault(),t.stopPropagation(),e&&a(r(e))},className:`favorite-btn ${u?`favorite-active`:``}`,title:u?`Remove from Favorites`:`Add to Favorites`,"aria-label":u?`Remove ${e?.title} from Favorites`:`Add ${e?.title} to Favorites`,type:`button`,children:(0,y.jsx)(f,{size:20,className:`heart-icon ${u?`heart-filled`:``}`})}),(0,y.jsxs)(`div`,{className:`rating-badge`,"aria-label":`IMDb Rating: ${g}`,children:[(0,y.jsx)(h,{size:13,className:`star-icon`}),(0,y.jsx)(`span`,{children:g})]})]}),(0,y.jsxs)(`div`,{className:`movie-info`,children:[(0,y.jsx)(`h3`,{className:`movie-title`,title:e?.title,children:e?.title}),(0,y.jsxs)(`div`,{className:`movie-meta`,children:[(0,y.jsx)(`span`,{className:`movie-year`,children:m}),(0,y.jsx)(`span`,{className:`media-type-badge`,children:`MOVIE`})]})]})]})}):null},x.__docgenInfo={description:``,methods:[],displayName:`MovieCard`}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{C=s(),S(),w={title:`Components/MovieCard`,component:x,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{movie:{control:`object`,description:`Movie payload data containing id, title, poster_path, vote_average, and release_date`}},decorators:[e=>(0,C.jsx)(`div`,{style:{width:`260px`},children:(0,C.jsx)(e,{})})]},T={args:{movie:{id:550,title:`Fight Club`,poster_path:`/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`,vote_average:8.4,release_date:`1999-10-15`}}},E={args:{movie:{id:278,title:`The Shawshank Redemption`,poster_path:`/9cqN121GvOiW2Vj0efk3jG6T4g9.jpg`,vote_average:9.3,release_date:`1994-09-23`}}},D={args:{movie:{id:12345,title:`Spider-Man: Across the Spider-Verse - Special Extended Collectors Edition 2024`,poster_path:`/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`,vote_average:8.7,release_date:`2023-06-02`}}},O={args:{movie:{id:99999,title:`Unreleased Indie Film`,poster_path:null,vote_average:7.2,release_date:`2025-11-20`}}},k={args:{movie:{id:155,title:`The Dark Knight`,poster_path:`/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,vote_average:9,release_date:`2008-07-18`}}},A=[`Default`,`HighRated`,`LongTitle`,`NoPosterFallback`,`ActionMovie`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    movie: {
      id: 550,
      title: 'Fight Club',
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      vote_average: 8.4,
      release_date: '1999-10-15'
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    movie: {
      id: 278,
      title: 'The Shawshank Redemption',
      poster_path: '/9cqN121GvOiW2Vj0efk3jG6T4g9.jpg',
      vote_average: 9.3,
      release_date: '1994-09-23'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    movie: {
      id: 12345,
      title: 'Spider-Man: Across the Spider-Verse - Special Extended Collectors Edition 2024',
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      vote_average: 8.7,
      release_date: '2023-06-02'
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    movie: {
      id: 99999,
      title: 'Unreleased Indie Film',
      poster_path: null,
      vote_average: 7.2,
      release_date: '2025-11-20'
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    movie: {
      id: 155,
      title: 'The Dark Knight',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      vote_average: 9.0,
      release_date: '2008-07-18'
    }
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as ActionMovie,T as Default,E as HighRated,D as LongTitle,O as NoPosterFallback,A as __namedExportsOrder,w as default};