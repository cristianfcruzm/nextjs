import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/layout/Layout'


const acercaDe = [
    {
      title: 'Proyecto MiniMarket de venta de Aguacates',
      content:
        'La plantilla fue realizada en Next Js integrano para el CSS semantic-ui.com, en las vistas React.Js y en la logica TypeScript',
    },
  ]
  
  const AcercaDe = () => {
    return (
      <Layout>
        <section>
          <Header as="h1" textAlign="center">
            Conoce mas Acerca de mis proyectos
          </Header>
          <figure>
            <Image src="/images/software.jpg" alt="Imagen de desarrollo" />
            <figcaption>
              Cristian Cruz Moreno{' '}
              <a
                target="_blank"
                href="https://github.com/cristianfcruzm/"
              >
                Revisa mis proyectos
              </a>
            </figcaption>
          </figure>
          <ol>
            {acercaDe.map(({ title, content }) => (
              <li key={title}>
                <h3 className="ui header">{title}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ol>
        </section>
  
        <style jsx>{`
          figure,
          ol {
            padding: 0;
            margin: 0;
          }
  
          figure {
            margin: 2rem auto 3rem;
            text-align: center;
          }
          figcaption {
            margin-top: 0.5rem;
            font-site: 0.7rem;
            color: grey;
          }
  
          ol {
            list-style: none;
  
            // Look ma! Responsive grid with no Media queries :)
            // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            grid-gap: 4.5rem 3rem;
  
            // Look ma! A CSS Counter :)
            // https://moderncss.dev/totally-custom-list-styles/
            counter-reset: orderedlist;
          }
          li::before {
            counter-increment: orderedlist;
            content: counter(orderedlist);
  
            // Boring stuff
            position: absolute;
            top: -43px;
            left: -5px;
            color: #cecece;
            font-size: 5rem;
            font-weight: bold;
          }
  
          li {
            position: relative;
          }
          h3:first-child {
            // why the first-child selector you may ask...
            // to gain specificity and thus avoid using '!important' :)
            padding-left: 40px;
            margin-bottom: 2rem;
          }
        `}</style>
      </Layout>
    )
  }


  export default AcercaDe