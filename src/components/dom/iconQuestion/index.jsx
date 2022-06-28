import { QuestionStyle } from '@/components/dom/iconQuestion/index.style'

const IconQuestion = ({ orientation = "right", ...props }) => {
  return (
    <QuestionStyle className="icon-question" width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.56585 9.51404C6.26596 9.51404 6.95526 9.34138 7.5727 9.01135C8.19014 8.68132 8.71665 8.20411 9.10561 7.622C9.49457 7.03988 9.73396 6.37082 9.80258 5.67409C9.87121 4.97736 9.76694 4.27445 9.49902 3.62764C9.2311 2.98082 8.8078 2.41007 8.26661 1.96593C7.72542 1.52178 7.08305 1.21796 6.3964 1.08138C5.70975 0.944796 5 0.979663 4.33005 1.18289C3.66009 1.38612 3.05059 1.75144 2.55554 2.24649" stroke="black"/>
      <path d="M1.49963 13.7425C1.49963 13.1834 1.60975 12.6298 1.8237 12.1133C2.03764 11.5968 2.35123 11.1275 2.74655 10.7321C3.14187 10.3368 3.61118 10.0232 4.12769 9.80929C4.6442 9.59535 5.1978 9.48523 5.75686 9.48523" stroke="black"/>
      <rect x="0.787598" y="16.373" width="1.05772" height="1.05772" fill="black"/>
    </QuestionStyle>
  )
}


export default IconQuestion
