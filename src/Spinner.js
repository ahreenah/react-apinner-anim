export default function({error}){
    return (
        <svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  color={error?"#fa2020":"#F9D342"}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={'spinner-anim'}
>
  <defs>
    <linearGradient id="spinner-secondHalf">
      <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
      <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
    </linearGradient>
    <linearGradient id="spinner-firstHalf">
      <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
      <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
    </linearGradient>
  </defs>

  <g stroke-width="8" class="rotating-lg first">
    <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
    <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />

    <path
      stroke="currentColor"
      stroke-linecap="round"
      d="M 4 100 A 96 96 0 0 1 4 98"
    />
    
  </g>
  
  
  <g stroke-width="10" class="rotating-md second">
    <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
    <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />

    <path
      stroke="currentColor"
      stroke-linecap="round"
      d="M 4 100 A 96 96 0 0 1 4 98"
    />
    
  </g>
  
  <g stroke-width="12" class="rotating third">
    <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
    <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />

    <path
      stroke="currentColor"
      stroke-linecap="round"
      d="M 4 100 A 96 96 0 0 1 4 98"
    />
    
  </g>

</svg>
    )
}