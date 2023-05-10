import { SectionBody, SectionContainer, SectionHeader, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionContainer>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionContainer>
);

export default Section;