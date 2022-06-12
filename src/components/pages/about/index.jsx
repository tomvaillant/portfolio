import { AboutStyle } from '@/components/pages/about/index.style'
import ListPosts from '@/components/dom/listPosts';

const datas = {
  name: "Tom Vaillant",
  job: "Senior Producer",
  location: "Based in Zurich",
  description: ["Currently consulting as an exec creative producer at Immersive Garden, past gigs have found me leading teams on award-winning projects for Red Bull and North Kingdom. I’m a self-taught filmmaker, programmer and dog dad living in Zurich. On calm days I work on my non-profit or code the occasional experiment!", "I'm the sum of a few parts : an independent filmmaking background, multiple code bootcamps, a French-American upbringing and a childhood obsession for science-fiction."],
  experienciesCompanies: {
    currently: {
      title: "Currently",
      companies: [
        {
          name: "Immersive Garden",
          url: "https://google.fr" 
        },
        {
          name: "Buried Signals",
          url: "https://google.fr" 
        }
      ]
    },
    previously: {
      title: "Previously",
      companies: [
        {
          name: "Immersive Garden",
          url: "https://google.fr" 
        },
        {
          name: "Buried Signals",
          url: "https://google.fr" 
        }
      ]
    }
  },
  experienciesProjects: {
    title: "Relevant Projects",
    companies: [
      {
        title: "With Immersive Garden",
        years: {
          2022: [
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            }
          ],
          2021: [
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            },
            {
              name: "Buried Signals",
              url: "https://google.fr"
            }
          ]
        }
      }
    ]
  },
  socials: [
    {
      title: "Linkedin",
      url: "https://google.fr"
    },
    {
      title: "Twitter",
      url: "https://google.fr"
    },
    {
      title: "Email",
      url: "mailTo:https://google.fr"
    }
  ]
}

const About = () => {
  return (
    <AboutStyle>
      <div className="container1">
        <div className="profil">
          <div className="infos">
            <h1 className="h2">{ datas.name }</h1>
            <p className="p1">{ datas.job }</p>
            <p className="p1">{ datas.location }</p>
          </div>
          <div className="socials">
            {
              datas.socials.map(social => <a key={ `social-${ social.title.toLowerCase() }` } className="p1" href={ social.url } target="_blank" rel="noreferrer">{ social.title }</a>)
            }
          </div>
        </div>
        <div className="description">
          {
            datas.description.map((desc, index) => <p key={ `desc-${ index }` } className="p1">{ desc }</p>)
          }
        </div>
        <hr className="separator" />
        <div className="companies">
          <div className="company current">
            <h2 className="h2">{ datas.experienciesCompanies.currently.title }</h2>
            <ul>
              {
                datas.experienciesCompanies.currently.companies.map(company => <li key={ `desc-${ company.name.toLowerCase() }` }><a className="p1" href={ company.url } target="_blank" rel="noreferrer"> { company.name }</a></li>)
              }
            </ul>
          </div>
          <div className="company previous">
            <h2 className="h2">{ datas.experienciesCompanies.previously.title }</h2>
            <ul>
              {
                datas.experienciesCompanies.previously.companies.map(company => 
                  <li key={ `desc-${ company.name.toLowerCase() }` }>
                    <a className="p1" href={ company.url } target="_blank" rel="noreferrer"> { company.name }</a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>       
        <hr className="separator" />
        <div className="projects">
          <h2 className="h2">{ datas.experienciesProjects.title }</h2>
          <ul className='projects-companies'>
            {
              datas.experienciesProjects.companies.map((company, index) => 
                <li key={ `company-${ index }` } className='projects-company'>
                  <h3 className="p1">{ company.title }</h3>
                  <ul className='years-projects'>
                  {
                    Object.keys(company.years).map((key, index) => 
                      <li key={ `year-${ key }` } className='year-projects'>
                        <p className="p2">{ key }</p>
                        <ul className='list-projects'>
                          {
                            company.years[key].map((project, index) => 
                              <li key={ `project-${ index }` } className='project'>
                                <a className="p1" href={ project.url } target="_blank" rel="noreferrer"> { project.name }</a>
                              </li>
                            )
                          }
                        </ul>
                      </li>
                    )
                  }
                  </ul>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About;
