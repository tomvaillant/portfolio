import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const AboutStyle = styled.div`
  padding-top: 220px;
  margin-right: 70px;
  padding-bottom: 110px;
  ${down('sm')} {
    margin-right: 0;
  }
  .profil {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    .infos {
      display: flex;
      flex-direction: column;
      .h2 {
        margin-bottom: 13.5px;
      }
    }
    .socials {
      display: flex;
      flex-direction: column;
      .p1 {
        margin-bottom: 13.5px;
        text-align: right;
        text-decoration: underline;
      }
    }
  }
  .description {
    .p1 {
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }
  }
  .companies {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .company {
      width: 100%;
      &.previous {
        ul {
          li {
            .p1 {
              text-decoration: underline;
            }
          }
        }
      }
      .h2 {
        margin-bottom: 13.5px;
      }
      ul {
        li {
          &:not(:last-child) {
            margin-bottom: 5px;
          }
          .p1 {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .projects {
    .h2 {
      margin-bottom: 32.5px;
    }
    .projects-companies {
      .projects-company {
        &:not(:last-child) {
          margin-bottom: 50px;
        }
        & > .p1 {
          margin-bottom: 13.5px;
        }
        .years-projects {
          .year-projects {
            display: flex;
            &:not(:last-child) {
              margin-bottom: 40px;
            }
            .list-projects {
              margin-left: 15px;
              padding-left: 30px;
              border-left: 1px solid var(--bd-color-main);
              .project {
                &:not(:last-child) {
                  margin-bottom: 13.5px;
                }
                .p1 {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
  .awards {
    .h2 {
      margin-bottom: 32.5px;
    }
    .awards-types {
      .awards-type {
        &:not(:last-child) {
          margin-bottom: 13.5px;
        }
        .p1 {
          margin-left: 13.5px;
        }
      }
    }
  }
`
