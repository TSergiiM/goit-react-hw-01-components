import PropTypes from 'prop-types';
import {
  SectionUploadStats,
  TitleStats,
  StatList,
  StatItem,
  StatLabel,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <SectionUploadStats>
      {title && <TitleStats>{title}</TitleStats>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </SectionUploadStats>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};
