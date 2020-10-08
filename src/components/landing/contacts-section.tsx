import React from 'react';
import { pick } from 'lodash';

import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { EMAIL, PHONE_NUMBER, SOCIAL } from 'constants/config';
import { SectionTitle, Link, Input, Button, Textarea } from 'components/ui';
import Section, { SectionProps } from './section';
import ContactItem from './contact-item';
import * as css from './contacts-section.module.scss';

export type ContactsSectionProps = Partial<SectionProps>;

const socialList = Object.values(pick(SOCIAL, ['whatsapp', 'telegram', 'instagram']));

function ContactsSection(props: ContactsSectionProps) {
  return (
    <Section {...props}>
      <SectionTitle align="center">Контакты</SectionTitle>

      <div className={css.container}>
        <div className={css.grid}>
          <div className={css.gridItem}>
            <p>
              На все ваши вопросы ответит мой менеджер <b>Михаил Петров</b>
            </p>

            <div className={css.contacts}>
              <Link href={PHONE_NUMBER.url}>
                <ContactItem icon={<PhoneIcon width="100%" />}>
                  {PHONE_NUMBER.pretty} ({PHONE_NUMBER.firstName})
                </ContactItem>
              </Link>

              <Link href={EMAIL.url}>
                <ContactItem icon={<MailIcon width="100%" />}>{EMAIL.pretty}</ContactItem>
              </Link>

              <div className={css.contactsRow}>
                {socialList.map(({ icon: Icon, label, url }, index) => (
                  <ContactItem key={index} href={url} icon={<Icon width="100%" />}>
                    {label}
                  </ContactItem>
                ))}
              </div>
            </div>
          </div>

          <div className={css.gridItem}>
            <form className={css.form}>
              <Input placeholder="Имя" />
              <Input placeholder="Номер телефона" />
              <Input placeholder="Почта" />
              <Textarea placeholder="Текст" rows={4} resize="vertical" />
              <div>
                <Button type="submit" isRounded>
                  Отправить
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactsSection;
