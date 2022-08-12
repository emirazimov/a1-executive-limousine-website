import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  InstagramIconForContacts,
  LinkedinIcon,
  MobilePhoneIcon,
  TitleUnderline,
  TwitterIcon,
} from "../../public/icons"
import styles from "./Contacts.module.scss"

const Contacts = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <span>CONTACTS</span>
          {/* <TitleUnderline
            color={"white"}
            width={"170px"}
            height={"22px"}
            firstViewBox={"40"}
            thirdViewBox={"165"}
          /> */}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.mobilePhone}>
            <MobilePhoneIcon />
            <span>+1 (202) 470-2394</span>
          </div>
          <div className={styles.email}>
            <EmailIcon />
            <span>Reservations@A1ExecutiveLimos.com</span>
          </div>
          <div className={styles.socialNetworks}>
            {/* <InstagramIconForContacts />
            <span>@dlxlimousine</span> */}
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
