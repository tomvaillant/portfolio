import { AboutStyle } from '@/components/pages/about/index.style'
import ListPosts from '@/components/dom/listPosts';
import { animate, motion } from 'framer-motion';

const datas = {
  name: "Tom Vaillant",
  job: "Creative Producer",
  location: "Based in Zurich",
  description: ["A self-taught filmmaker and programmer with an affinity for user experience design and digital strategy. After years of trying to become a specialist I've fallen in love with being a dedicated generalist, carving out time to continue learning and improving as a project lead or visual storyteller.", 
  "Currently leading the production team at Immersive Garden, past gigs have found me delivering award-winning projects for Red Bull and North Kingdom.",
  "On days off I write, indulge a childhood sci-fi obsession, code the occasional experiment or head out to goof around in the mountains with my dog."],
  experienciesCompanies: {
    currently: {
      title: "Currents",
      companies: [
        {
          name: "Immersive Garden",
          url: "https://immersive-g.com" 
        },
        {
          name: "Buried Signals",
          url: "https://buriedsignals.com" 
        },
        {
          name: "Wallrunners",
          url: "https://wallrunners.org" 
        }
      ]
    },
    previously: {
      title: "Previous",
      companies: [
        {
          name: "North Kingdom",
          url: "https://northkingdom.com" 
        },
        {
          name: "Red Bull",
          url: "https://redbull.com" 
        },
        {
          name: "Seedstars",
          url: "https://seedstars.com" 
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
              name: "Amazon Games - New World Map",
              url: "https://www.awwwards.com/sites/new-world-map-1"
            },
            {
              name: "Orano",
              url: "https://www.awwwards.com/sites/orano"
            }
          ]
        }
      },
      {
        title: "With North Kingdom",
        years: {
          2019: [
            {
              name: "Riot - Waiting for Ryze",
              url: "https://www.riotgames.com/en/work-with-us/offices/dublin/getting-creative-with-eus-publishing-team"
            },
            {
              name: "ON - The Roger",
              url: "https://theroger.com/en/products"
            },
            {
              name: "IBM - Terminal",
              url: "https://www.ibm.com/security/digital-assets/cybersecurity-ops/terminal/"
            },
            {
              name: "Nespresso - XR Interactive Tables",
              url: "https://www.northkingdom.com/case/nespresso-table"
            },
            {
              name: "Riot X Arcane",
              url: "https://www.riotgames.com/en/news/riotx-arcane-until-next-time"
            }
          ],
        },
      }, 
      {
        title: "With Red Bull",
        years: {
          2016: [
            {
              name: "Chromasound",
              url: "https://hyphenate.tv/work/redbull-chromasound-vr/"
            },
            {
              name: "Interactive Festival Lineup",
              url: "https://www.awwwards.com/sites/festival-lineup"
            },
            {
              name: "Chordsurfer",
              url: "https://www.cssdesignawards.com/sites/chordsurfer/28873/"
            }
          ],
        },
      },
      {
        title: "Freelance",
        years: {
          2014: [
            {
              name: "Between Snow and Stars",
              url: "https://vimeo.com/145770250"
            }
          ]
        }
      }
    ]
  },
  awards: {
    title: "Awwwards",
    list: [
      { number: "13", type: "Awwwards" },
      { number: "10", type: "FWA" },
      { number: "5", type: "CSS" }
    ]
  },
  socials: [
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/tomvaillant/"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/tmvllnt"
    },
    {
      title: "Email",
      url: "mailTo:tom.vaillant@icloud.com"
    }
  ]
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 1.1,
    skewY: 2.5
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    skewY: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.185
    }
  }
};

const About = () => {
  return (
    <AboutStyle>
      <motion.div className="container1" initial='initial' animate='animate' variants={stagger}>
        <motion.div className="profil" variants={fadeInUp}>
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
        </motion.div>
        <motion.div className="description" variants={fadeInUp}>
          {
            datas.description.map((desc, index) => <p key={ `desc-${ index }` } className="p1">{ desc }</p>)
          }
        </motion.div>
        <motion.hr className="separator" variants={fadeInUp} />
        <motion.div className="companies" variants={fadeInUp}>
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
        </motion.div>       
        <motion.hr className="separator" variants={fadeInUp} />
        <motion.div className="projects" variants={fadeInUp}>
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
        </motion.div>
        <motion.hr className="separator" variants={fadeInUp} />
        <motion.div className="awards" variants={fadeInUp}>
          <h2 className="h2">{ datas.awards.title }</h2>
          <ul className='awards-types'>
            {
              datas.awards.list.map((award, index) => 
                <li key={ `award-${ award.type }` } className='awards-type'>
                  <p><span className="p2">{ award.number }</span><span className="p1">{ award.type }</span></p>
                </li>
              )
            }
          </ul>
        </motion.div>
      </motion.div>
    </AboutStyle>
  )
}

export default About;
