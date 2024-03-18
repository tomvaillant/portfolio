import { AboutStyle } from '@/components/pages/about/index.style'
import { animate, motion } from 'framer-motion'

const datas = {
  name: 'Tom Vaillant',
  job: 'Visual Journalist & Filmmaker',
  location: 'Based in Zurich',
  description: [
    "I've been producing content and interactive experiences for the past decade, relying on creative skills from a documentary filmmaking background with programming expertise in Svelte and D3.",
    "After leading large production teams on award-winning web and video productions I created an independent communications and journalism studio, where I'm currently working on visual investigations for Le Monde, SudDeutsch Zeitung, NZZ and The Pudding.",
    "I received a scholarship to join this year's Lede Program at the Columbia School of Journalism, and completed information design and data visualization  studies at Parsons School of Design.",
    'On days off I love Crossfit, reading and goofing around in the mountains with my dog.',
  ],

  experienciesCompanies: {
    currently: {
      title: 'Current',
      companies: [
        {
          name: 'Buried Signals',
          url: 'https://buriedsignals.com',
        },
      ],
    },
    previously: {
      title: 'Education',
      companies: [
        {
          name: 'Columbia School of Journalism - Lede Program',
          url: 'https://ledeprogram.com/',
        },
        {
          name: 'Parsons School of Design - Information Design & Data Visualization',
          url: 'https://cpe.newschool.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=1012525',
        },
        {
          name: 'Bellingcat - OSINT Training Workshops',
          url: 'https://www.bellingcat.com/workshops/',
        },
      ],
    },
  },
  socials: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/_tomvaillant',
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/tomvaillant/',
    },
    {
      title: 'Email',
      url: 'mailTo:tom@buriedsignals.com',
    },
  ],
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 1.1,
    skewY: 2.5,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    skewY: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.185,
    },
  },
}

const About = () => {
  return (
    <AboutStyle>
      <motion.div
        className='container1'
        initial='initial'
        animate='animate'
        variants={stagger}
      >
        <motion.div className='profil' variants={fadeInUp}>
          <div className='infos'>
            <h1 className='h2'>{datas.name}</h1>
            <p className='p1'>{datas.job}</p>
            <p className='p1'>{datas.location}</p>
          </div>
          <div className='socials'>
            {datas.socials.map((social) => (
              <a
                key={`social-${social.title.toLowerCase()}`}
                className='p1'
                href={social.url}
                target='_blank'
                rel='noreferrer'
              >
                {social.title}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div className='description' variants={fadeInUp}>
          {datas.description.map((desc, index) => (
            <p key={`desc-${index}`} className='p1'>
              {desc}
            </p>
          ))}
        </motion.div>
        <motion.hr className='separator' variants={fadeInUp} />
        <motion.div className='companies' variants={fadeInUp}>
          <div className='company current'>
            <h2 className='h2'>
              {datas.experienciesCompanies.currently.title}
            </h2>
            <ul>
              {datas.experienciesCompanies.currently.companies.map(
                (company) => (
                  <li key={`desc-${company.name.toLowerCase()}`}>
                    <a
                      className='p1'
                      href={company.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {' '}
                      {company.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className='company previous'>
            <h2 className='h2'>
              {datas.experienciesCompanies.previously.title}
            </h2>
            <ul>
              {datas.experienciesCompanies.previously.companies.map(
                (company) => (
                  <li key={`desc-${company.name.toLowerCase()}`}>
                    <a
                      className='p1'
                      href={company.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {' '}
                      {company.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
        <motion.hr className='separator' variants={fadeInUp} />
      </motion.div>
    </AboutStyle>
  )
}

export default About
