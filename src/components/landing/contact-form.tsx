import React, { useCallback, useState } from 'react';
import Reaptcha from 'reaptcha';
import InputMask from 'react-input-mask';
import { useForm } from '@formcarry/react';

import { FORMCARRY_CONTACT_FORM_ID, RECAPTCHA_KEY } from 'constants/config';
import { Alert, Button, Input, Textarea } from 'components/ui';
import css from './contact-form.module.scss';

function ContactForm() {
  const { state, submit } = useForm({
    id: FORMCARRY_CONTACT_FORM_ID,
  });

  const [isVerified, setIsVerified] = useState(false);

  const onVerify = useCallback(() => {
    setIsVerified(true);
  }, []);

  return (
    <form className={css.form} onSubmit={submit}>
      {state.error ? (
        <Alert variant="error">Что-то пошло не так. Попробуйте позже.</Alert>
      ) : state.submitted ? (
        <Alert variant="success">Спасибо! Мы отправили ваше письмо.</Alert>
      ) : null}

      <Input name="name" placeholder="Имя" required />
      <InputMask mask="+7 (999) 999-99-99">
        <Input type="tel" name="phone" placeholder="Номер телефона" />
      </InputMask>
      <Input type="email" name="email" placeholder="Почта" required />
      <Textarea name="text" placeholder="Текст" rows={4} resize="vertical" required />

      <input type="hidden" name="_gotcha" />

      {RECAPTCHA_KEY && <Reaptcha sitekey={RECAPTCHA_KEY} onVerify={onVerify} />}

      <div>
        <Button type="submit" disabled={!isVerified} isRounded>
          {state.submitting ? 'Отправляем...' : 'Отправить'}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
