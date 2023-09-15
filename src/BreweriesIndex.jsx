export function BreweriesIndex(props) {


  return (
    <div>
<h1>All Breweries</h1>
{props.breweries.map((brewery) => (
         <div key={brewery.id}>
           <h2>{brewery.name}</h2>
           <p>Type: {brewery.brewery_type}</p>
           <p>Address: {brewery.address}</p>
           <p>Website: {brewery.website}</p>
           <p>State: {brewery.state}</p>


         </div>
       ))}
    </div>
  )
}