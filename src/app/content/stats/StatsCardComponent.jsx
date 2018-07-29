import { Card } from 'material-ui';
import React from 'react';
import { string, number } from '../../commons/ExtractedPropTypes';


const StatsCard = ({
  title, text, className, ...props
}) => (
  <Card className={`stats-card flex just-center accent-border ${className}`} {...props}>
    <h1 className="thin text">{title}</h1>
    <p className="text t-2-em">{text}</p>
  </Card>
);

StatsCard.propTypes = {
  title: string.isRequired,
  text: number.isRequired,
};

export default StatsCard;
