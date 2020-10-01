import React from 'react';

import { ReactComponent as TimerIcon } from 'assets/icons/timer.svg';
import { EMAIL, PHONE_NUMBER } from 'constants/config';
import { SectionTitle, Link, Input, Button, Textarea } from 'components/ui';
import Section from './section';
import ContactItem from './contact-item';
import * as css from './contacts-section.module.scss';

function ContactsSection() {
  return (
    <Section variant="primary">
      <SectionTitle align="center">Контакты</SectionTitle>

      <div className={css.container}>
        <div className={css.grid}>
          <div className={css.gridItem}>
            <p>
              На все ваши вопросы ответит мой менеджер <b>Михаил Петров</b>
            </p>

            <div className={css.contacts}>
              <Link href={PHONE_NUMBER.url}>
                <ContactItem icon={<TimerIcon width="100%" />}>
                  {PHONE_NUMBER.pretty} ({PHONE_NUMBER.firstName})
                </ContactItem>
              </Link>

              <Link href={EMAIL.url}>
                <ContactItem icon={<TimerIcon width="100%" />}>
                  {EMAIL.pretty}
                </ContactItem>
              </Link>

              <div className={css.contactsRow}>
                <ContactItem icon={<TimerIcon width="100%" />}>WhatsApp</ContactItem>
                <ContactItem icon={<TimerIcon width="100%" />}>Telegram</ContactItem>
                <ContactItem icon={<TimerIcon width="100%" />}>Instagram</ContactItem>
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
