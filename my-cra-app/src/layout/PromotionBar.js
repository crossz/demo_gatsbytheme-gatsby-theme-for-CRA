import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { useTranslation, Trans } from 'react-i18next'
import { PROMOTION_CODE } from '../utils/constant'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'sticky',
      backgroundColor: theme.palette.secondary.main,
      bottom: 0,
      zIndex: theme.zIndex.appBar,
      padding: theme.spacing(1),
      color: theme.palette.primary.contrastText,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: theme.typography.h6.fontSize,
      textAlign: 'center',
      flexWrap: 'wrap',
      minHeight: theme.spacing(8),
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.body1.fontSize,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.body2.fontSize,
        alignItems: 'flex-start',
      },
    },
    promotionWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'left',
      fontWeight: theme.typography.fontWeightBold,
    },
    promotionClickable: {
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.contrastText,
      marginLeft: theme.spacing(1),
      cursor: 'pointer',
      height: theme.spacing(3),
    },
    promotionLabel: {
      fontSize: theme.typography.h6.fontSize,
      lineHeight: 1,
    },
    promotionCode: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.h6.fontSize,
      color: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 1),
        fontSize: theme.typography.body1.fontSize,
      },
    },
    copyBtn: {
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.caption.fontSize,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 1),
      },
    },
    tips: {
      fontSize: theme.typography.overline.fontSize,
      marginLeft: theme.spacing(-1),
      fontWeight: theme.typography.fontWeightLight,
    },
  }),
)

const PromotionBar = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Box className={classes.root}>
      <Box>
        {t('glossary.promotion.welcome_offer')}
        <Trans i18nKey="glossary.promotion.welcome_discount">
          .<span style={{ fontSize: '30px', fontWeight: 900 }}>$500</span>
        </Trans>
        {/* <Box whiteSpace="pre" component="span">
          ({t('glossary.original_price')}$2,200)
        </Box> */}
      </Box>
      <Box textAlign="left" ml={2}>
        <Box className={classes.promotionWrapper}>
          <Box display="flex" alignItems="center">
            <Box className={classes.promotionLabel}>{t('glossary.promotion_code')}</Box>
            <CopyToClipboard
              text={PROMOTION_CODE}
              onCopy={() => toast.success(t('toast.promo_code_copy_success'))}
            >
              <Box className={classes.promotionClickable} component="span">
                <Box className={classes.promotionCode} component="span">
                  {PROMOTION_CODE}
                </Box>
                <Box className={classes.copyBtn} component="span">
                  {t('common.copy')}
                </Box>
              </Box>
            </CopyToClipboard>
          </Box>
        </Box>
        <Box className={classes.tips}>({t('glossary.get_discount_price_after_enter_promo_code')})</Box>
      </Box>
    </Box>
  )
}

export default PromotionBar
