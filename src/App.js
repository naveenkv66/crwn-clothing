import './App.css';

const App = () => 
{

  const categories = [
    {
      id: 1,
      title: 'Hats',

    },
    {
      id: 2,
      title: 'Sneakers',

    },
    {
      id: 3,
      title: 'Jackets',

    },
    {
      id: 4,
      title: 'Men',

    },
    {
      id: 5,
      title: 'Women',

    }
  ]
  return (
    <div className="categories-container">
      {
        categories.map(({ title, id }) =>
        {

          return (<div key={id} className="categorie-container">
            <img className="background-image"></img>
            <div className="categorie-body-container">
              <h1 >{title}</h1>
              <h2 >Shop Now</h2>
            </div>
          </div>)

        })
      }

    </div>
  )
}

export default App;
