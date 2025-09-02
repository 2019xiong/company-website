import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const FrontPage = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: 'en' | 'zh') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <Button onClick={() => changeLang('zh')}>中文</Button>
      <Button onClick={() => changeLang('en')}>English</Button>
    </div>
  );
}

export default FrontPage;