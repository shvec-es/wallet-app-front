import {
  MobileCard,
  MobileCardGroup,
  MobileCardItem,
  MobileCardItemValue,
  MobileCardItemColor,
  NoTransactions,
} from './TableMobile.styled';
import { useTranslation } from 'react-i18next';

function TableMobile({ data }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.slice(0, 2);

  return (
    <>
      {data.length === 0 ? (
        <NoTransactions>You have no transactions yet.</NoTransactions>
      ) : (
        <>
          {data.map(
            ({
              _id,
              date,
              typeTransaction,
              category,
              description,
              sum,
              categoryUA,
              balance,
            }) => (
              <MobileCard
                key={_id}
                type={typeTransaction === true ? 'income' : 'costs'}
              >
                <MobileCardGroup>
                  <MobileCardItem>{t('date')}</MobileCardItem>
                  <MobileCardItemValue>{date}</MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('type')}</MobileCardItem>
                  <MobileCardItemValue>
                    {typeTransaction === true ? '+' : '-'}
                  </MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('category')}</MobileCardItem>
                  <MobileCardItemValue>
                    {currentLanguage === 'en'
                      ? category ?? 'Income'
                      : categoryUA ?? 'Дохід'}
                  </MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('description')}</MobileCardItem>
                  <MobileCardItemValue>{description}</MobileCardItemValue>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('sum')}</MobileCardItem>
                  <MobileCardItemColor
                    type={typeTransaction === true ? 'income' : 'costs'}
                  >
                    {sum}
                  </MobileCardItemColor>
                </MobileCardGroup>
                <MobileCardGroup>
                  <MobileCardItem>{t('balance')}</MobileCardItem>
                  <MobileCardItemValue>{balance}</MobileCardItemValue>
                </MobileCardGroup>
              </MobileCard>
            ),
          )}
        </>
      )}
    </>
  );
}

export default TableMobile;
