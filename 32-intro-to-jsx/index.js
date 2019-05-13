const Title = (props) => React.createElement('h1', {}, props.text)
const TitleJSX = (props) => <h1>{props.text}</h1>

const title1 = Title({ text: "Cool!" })
const title2 = Title({ text: "ASdfghgj!" })
const title3 = Title({ text: "asdfghj!" })
const title4 = Title({ text: "YAYAYAYAYA!" })

// <div class='article' id='article-1'>
//   <h1 class='article-title'>Title</h1>
//   <img class='article-image' src='' />
//   <p class='article-content'>Content...</p>
// </div>

const Article = (props) => React.createElement('div', { className: 'article', id: `article-${props.id}` }, [
  React.createElement('h1', { className: 'article-title' }, props.title),
  React.createElement('img', { src: props.image, className: 'article-image' }),
  React.createElement('p', { className: 'article-content' }, props.content)
])

const article1 = Article({ title: 'The monkey strikes again!', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681', content: 'Ooh ooh ah ah', id: 1 })
const article2 = Article({ id: 2, title: 'something', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdEOQgtySQsgH7zKj0CD1lnxzPJ4wrNIBx3oXaSAFA5vx6vH9_w', content: 'bla bla bla' })

const Navbar = (props) => {
  return <div className={`ui inverted ${props.colour} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.title}
        </div>
        <div className="sub header">
          {props.subtitle}
        </div>
      </h2>
    </a>
  </div>
}

// const Navbar = (props) => React.createElement('div', { className: `ui inverted ${props.colour} menu` },
//   React.createElement('a', { className: 'item' },
//     React.createElement('h2', { className: 'ui header' }, [
//       React.createElement('i', { className: `${props.icon} icon` }),
//       React.createElement('div', { className: 'content' }, props.title),
//       React.createElement('div', { className: 'sub header' }, props.subtitle)
//     ])
//   )
// )

const App = (props) => React.createElement('div', { className: 'app' }, [
  Navbar({ colour: 'blue', icon: 'react', title: 'Our first React App!!', subtitle: 'Cool, innit?' }),
  Title({ text: 'I love it!' }),
  Article({ title: 'The monkey strikes again!', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681', content: 'Ooh ooh ah ah', id: 1 }),
  Article({ title: 'The monkey strikes again!', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681', content: 'Ooh ooh ah ah', id: 1 })
])




ReactDOM.render(
  // what to render
  App(),
  // where to put it
  document.querySelector('#root')
)
