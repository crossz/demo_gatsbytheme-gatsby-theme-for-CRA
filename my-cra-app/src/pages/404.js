import React from "react";
import { useTranslation } from "react-i18next";

// import Loading from '../components/Loading'

const NoFound = () => {
  const { t } = useTranslation();
  return <>not found 404</>;
  // return <Loading title={t('validation.can_not_find_this_page')} status="fulfilled" />
};

export default NoFound;
