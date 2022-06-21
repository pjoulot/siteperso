import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Icon,
    Stack,
} from "@chakra-ui/react";
import { createIcon } from '@chakra-ui/icons';
import Heading2 from "./headings/Heading2";
import Heading3 from "./headings/Heading3";
import { SiPhp, SiDrupal, SiHtml5, SiCss3, SiJavascript, SiWordpress, SiReact, SiJekyll, SiApache, SiNginx, SiLetsencrypt, SiLinuxcontainers, SiGithub, SiGit, SiGitlab, SiJenkins, SiBitbucket, SiLinux, SiWindows } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const VarnishIcon = createIcon({
    displayName: 'VarnishIcon',
    viewBox: '0 0 65.879 65.879',
    path: (
        <path d="M33.297 15.07A15.04 15.04 0 0 1 48.367 0a15.04 15.04 0 0 1 15.07 15.07 15.04 15.04 0 0 1-15.07 15.07 15.04 15.04 0 0 1-15.07-15.07zM13.623 53.139a10.84 10.84 0 0 1 10.861-10.861 10.861 10.861 0 1 1 0 21.722 10.84 10.84 0 0 1-10.861-10.861zM0 28.355c0-3.477 2.799-6.276 6.276-6.276s6.276 2.799 6.276 6.276-2.799 6.276-6.276 6.276S0 31.832 0 28.355z" fillRule="nonzero"/>
    ),
});

export default function Skills() {
    const gradient = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><linearGradient id='grad'><stop offset='0%' stop-color='%23fd475d'/><stop offset='100%' stop-color='%23815ad4'/></linearGradient></svg>#grad") `;
    const Feature = (props) => {
        return (
            <Box bg={useColorModeValue("white", "gray.800")} px={8} py={8} shadow="lg" rounded="xl">
                <Flex shrink={0} justifyContent={'center'} mb={"1rem"} alignItems="center" color={props.color}>
                    <Icon
                        boxSize={12}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        stroke={gradient}
                        fill={gradient}
                        as={props.icon}
                    >
                    </Icon>
                </Flex>
                <Box textAlign={'center'}>
                    <chakra.dt
                        fontSize="lg"
                        fontWeight="medium"
                        lineHeight="6"
                        color={useColorModeValue("gray.900")}
                    >
                        {props.title}
                    </chakra.dt>
                </Box>
            </Box>
        );
    };

    Feature.defaultProps = {
        color: 'brand.500'
    };

    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                    <Box mb={20} textAlign={{ lg: "center" }}>
                        <Heading2>
                            Professional skills
                        </Heading2>
                    </Box>

                    <Box mb={20}>
                        <Box>
                            <Heading3>
                                Web Technologies
                            </Heading3>
                        </Box>

                        <Box mt={5}>
                            <Stack
                                spacing={{ base: 10, md: 0 }}
                                display={{ md: "grid" }}
                                gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                                gridColumnGap={{ md: 8 }}
                                gridRowGap={{ md: 10 }}
                            >
                                <Feature
                                    title="HTML"
                                    icon={SiHtml5}
                                >
                                </Feature>
                                <Feature
                                    title="CSS / Sass"
                                    icon={SiCss3}
                                >
                                </Feature>
                                <Feature
                                    title="JS"
                                    icon={SiJavascript}
                                >
                                </Feature>
                                <Feature
                                    title="PHP"
                                    icon={SiPhp}
                                >
                                </Feature>

                                <Feature
                                    title="Drupal"
                                    icon={SiDrupal}
                                >
                                </Feature>

                                <Feature
                                    title="Wordpress"
                                    icon={SiWordpress}
                                >
                                </Feature>

                                <Feature
                                    title="React"
                                    icon={SiReact}
                                >
                                </Feature>

                                <Feature
                                    title="Jekyll"
                                    icon={SiJekyll}
                                ></Feature>
                            </Stack>
                        </Box>
                    </Box>

                    <Box mb={20}>
                        <Box>
                            <Heading3>
                                System
                            </Heading3>
                        </Box>

                        <Box mt={5}>
                            <Stack
                                spacing={{ base: 10, md: 0 }}
                                display={{ md: "grid" }}
                                gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                                gridColumnGap={{ md: 8 }}
                                gridRowGap={{ md: 10 }}
                            >
                                <Feature
                                    title="Apache"
                                    icon={SiApache}
                                >
                                </Feature>
                                <Feature
                                    title="MySQL"
                                    icon={GrMysql}
                                >
                                </Feature>
                                <Feature
                                    title="Nginx"
                                    icon={SiNginx}
                                >
                                </Feature>
                                <Feature
                                    title="Let's Encrypt"
                                    icon={SiLetsencrypt}
                                >
                                </Feature>

                                <Feature
                                    title="LXC"
                                    icon={SiLinuxcontainers}
                                >
                                </Feature>

                                <Feature
                                    title="Varnish"
                                    icon={VarnishIcon}
                                >
                                </Feature>
                            </Stack>
                        </Box>
                    </Box>

                    <Box mb={20}>
                        <Box>
                            <Heading3>
                                Version control system and delivery
                            </Heading3>
                        </Box>

                        <Box mt={5}>
                            <Stack
                                spacing={{ base: 10, md: 0 }}
                                display={{ md: "grid" }}
                                gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                                gridColumnGap={{ md: 8 }}
                                gridRowGap={{ md: 10 }}
                            >
                                <Feature
                                    title="Git"
                                    icon={SiGit}
                                >
                                </Feature>
                                <Feature
                                    title="Gitlab"
                                    icon={SiGitlab}
                                >
                                </Feature>
                                <Feature
                                    title="Github"
                                    icon={SiGithub}
                                >
                                </Feature>
                                <Feature
                                    title="Bitbucket"
                                    icon={SiBitbucket}
                                ></Feature>
                                <Feature
                                    title="Jenkins"
                                    icon={SiJenkins}
                                >
                                </Feature>
                            </Stack>
                        </Box>
                    </Box>

                    <Box mb={20}>
                        <Box>
                            <Heading3>
                                Operating System
                            </Heading3>
                        </Box>

                        <Box mt={5}>
                            <Stack
                                spacing={{ base: 10, md: 0 }}
                                display={{ md: "grid" }}
                                gridTemplateColumns={{ md: "repeat(4,1fr)" }}
                                gridColumnGap={{ md: 8 }}
                                gridRowGap={{ md: 10 }}
                            >
                                <Feature
                                    title="Linux"
                                    icon={SiLinux}
                                >
                                </Feature>
                                <Feature
                                    title="Windows"
                                    icon={SiWindows}
                                >
                                </Feature>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}
