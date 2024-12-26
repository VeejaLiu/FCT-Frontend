import { IconGithubLogo, IconMailStroked1 } from '@douyinfe/semi-icons';
import { Typography } from '@douyinfe/semi-ui';
import styles from './ContactUsComponent.module.css';

const { Text } = Typography;

const contactLinks = [
  {
    label: 'Discord',
    href: 'https://discord.gg/aKfWAtbJ8F',
    text: 'https://discord.gg/aKfWAtbJ8F',
    icon: null,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/VeejaLiu/FIFA-Career-Dashboard-Frontend',
    text: 'VeejaLiu/FCT-Frontend',
    icon: <IconGithubLogo />,
  },
  {
    label: 'Email',
    href: 'mailto:support@fccareer.top',
    text: 'support@fccareer.com',
    icon: <IconMailStroked1 />,
  },
];

export function ContactUsComponent() {
  return (
    <div className={styles.contactContainer}>
      {contactLinks.map((link, index) => (
        <div key={index} className={styles.contactItem}>
          <span className={styles.contactLabel}>{link.label}</span>
          <Text
            icon={link.icon}
            link={{
              href: link.href,
              target: '_blank',
            }}
            underline={true}
            className={styles.contactLink}
          >
            {link.text}
          </Text>
        </div>
      ))}
    </div>
  );
}
