const Search=(props)=>{
    return(
        <div className='search'>
          <div className='mb-3'>
            <input type="text" className="form" id="title" placeholder='Find Your favourite movie and press Enter' value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} required={true}/>
          </div>
        </div>
    );
}
export default Search;