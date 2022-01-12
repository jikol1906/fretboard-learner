import * as React from "react";
import ReactModal from "react-modal";
import { Box, Flex, Heading } from "rebass/styled-components";
import FretboardSvg from "../../components/Fretboard/FretboardSvg";

interface IStatsProps {}

const Stats: React.FunctionComponent<IStatsProps> = (props) => {
  return (
    <ReactModal
      appElement={document.getElementById("root") || undefined}
      style={{
        content: {
          borderRadius: "30px",
          padding: 0,
          background: "var(--color-secondary)",
        },
      }}
      shouldCloseOnOverlayClick
      isOpen={true}
    >
      <Flex flexDirection="column" height="100%" p="4em">
        <Heading
          as="h2"
          mb="1em"
          fontSize="2.5em"
          fontFamily="primary"
          color="white"
        >
          Stats
        </Heading>

        <Box textAlign="center" sx={{overflowY:'visible' ,overflowX: "scroll", whiteSpace: "nowrap", '-webkit-overflow-scrolling:':'touch' }}>
          <Box display="inline-block" width="100%" maxWidth="2500px" minWidth="900px">
            <FretboardSvg />
          </Box>
        </Box>
      </Flex>
    </ReactModal>
  );
};

export default Stats;
