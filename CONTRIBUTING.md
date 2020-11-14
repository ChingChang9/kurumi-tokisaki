# Contributing
Feel free to add your own images to the database or re-map the text positions without asking. If your contribution is of other matters, please first discuss the change you wish to make via an issue before making a change. Thanks!

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process
1. Add the image(s) to ./assets/images/ and make sure it follows the indexing.
2. Add the text box position and size of each image you added in ./assets/imageInfo.json (see more about the text box position and size below).
3. Increase the version number in package.json to a newer version. The versioning scheme we use is [SemVer](http://semver.org/) (if it's just image addition or text-reposition, increase the MINOR).

### Text Box Position and Size
Here are three examples of where to put the text boxes, but feel free to get creative!

```json
"7": {
  "x": 5,
  "y": 391,
  "maxWidth": 552,
  "maxHeight": 178,
  "shadow": true
}
```
![Text box example 1](./assets/examples/1.jpg#center)

```json
"17": {
  "x": 312,
  "y": 266,
  "maxWidth": 164,
  "maxHeight": 198,
  "shadow": true
}
```
![Text box example 2](./assets/examples/2.jpg#center)

```json
"27": {
  "x": 387,
  "y": 11,
  "maxWidth": 146,
  "maxHeight": 318,
  "shadow": false
}
```
![Text box example 3](./assets/examples/3.jpg#center)

## Code of Conduct

### Our Pledge
In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards
Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities
Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope
This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project owner at [chingtheprogrammer@gmail.com]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project owner is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution
This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4,
available at [http://contributor-covenant.org/version/1/4](http://contributor-covenant.org/version/1/4/).