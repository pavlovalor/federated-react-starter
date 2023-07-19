import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Alert } from '@mui/material';

export const Page: React.FC = () => (
  <Box padding="2rem">
    <Helmet>
      <title>Root route</title>
    </Helmet>
    <Typography color="textPrimary" variant="h5" component="h1">
      Pros & Cons of monorepo + webpack module federation app split
    </Typography>
    <br />
    <Alert severity="info">ChatGPT generated content!</Alert>
    <br />
    <Typography color="textSecondary" variant="body1" component="p">
      Using Webpack Module Federation and a monorepo approach can have several advantages and
      disadvantages. <br />
      Let&apos;s explore the pros and cons:
    </Typography>
    <br />
    <Typography color="textSecondary" variant="body1" component="p">
      Pros of using Webpack Module Federation with a Monorepo:
    </Typography>
    <ol>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Code Sharing</b>: Webpack Module Federation allows you to share code between different
        applications or microservices, even if they are part of a monorepo. This promotes code
        reuse, reduces duplication, and improves overall development efficiency.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Decentralized Development</b>: With a monorepo, you can have multiple applications or
        services within the same codebase. Webpack Module Federation enables decentralized
        development by allowing each application or service to be developed and deployed
        independently. This fosters modularity and autonomy among teams working on different parts
        of the system.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Simplified Dependency Management</b>: Managing dependencies can be easier in a monorepo
        since all applications and services share the same dependency tree. Webpack Module
        Federation complements this by enabling fine-grained control over which dependencies are
        shared and ensuring consistent versions across different parts of the system. This reduces
        the likelihood of version conflicts and simplifies the dependency management process.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Faster Development and Deployment</b>: By sharing code and resources between applications
        or services, you can reduce duplication and speed up development. Changes made to shared
        code can be propagated to all applications or services automatically, resulting in faster
        iteration cycles and shorter deployment times.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Consistent UI and UX</b>: Webpack Module Federation allows you to build a cohesive user
        interface and user experience across different applications or services. You can share UI
        components, styles, and other assets, ensuring a consistent look and feel throughout the
        system. This improves brand consistency and reduces the effort required to maintain a
        unified user experience.
      </Typography>
    </ol>
    <br />
    <Typography color="textSecondary" variant="body1" component="p">
      Cons of using Webpack Module Federation with a Monorepo:
    </Typography>
    <ol>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Complexity</b>: Webpack Module Federation introduces additional complexity to the build
        and deployment processes. Configuring and maintaining the federation can be challenging,
        especially when dealing with multiple applications or services. It requires a good
        understanding of Webpack and module federation concepts.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Increased Build Times</b>: Sharing code and resources across applications or services can
        lead to increased build times, especially if there are large dependencies or frequent
        changes to shared code. Each application or service may need to rebuild dependencies that
        are shared, impacting the overall build performance.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Potential Coupling</b>: Sharing code between applications or services can introduce tight
        coupling if not managed properly. Changes made to shared code can have unintended
        consequences on other parts of the system, leading to unexpected bugs or regressions.
        Careful coordination and versioning strategies are necessary to mitigate this risk.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Dependency Conflicts</b>: While monorepos can simplify dependency management, conflicts
        can still occur, especially when different applications or services require different
        versions of the same dependency. Resolving these conflicts can be challenging and
        time-consuming, requiring careful versioning and compatibility management.
      </Typography>
      <Typography color="textSecondary" component="li" variant="body2">
        <b>Increased Complexity of Testing</b>: Testing can become more complex when multiple
        applications or services are part of a monorepo. Integration testing becomes crucial to
        ensure that changes made to shared code or dependencies do not introduce regressions or
        compatibility issues across the system. Setting up and maintaining comprehensive test suites
        can be more demanding compared to single-application projects.
      </Typography>
    </ol>
    <Typography color="textSecondary" variant="body1" component="p">
      Overall, using Webpack Module Federation with a monorepo can bring benefits such as code
      sharing, decentralized development, simplified dependency management, faster development, and
      consistent UI/UX. However, it also introduces complexity, potential coupling, increased build
      times, dependency conflicts, and more demanding testing requirements. It&apos;s essential to
      carefully consider the specific needs and complexities of your project before adopting this
      approach.
    </Typography>
  </Box>
);
