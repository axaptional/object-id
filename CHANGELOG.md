# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][KEEP-A-CHANGELOG],
and this project adheres to [Semantic Versioning][SEMVER].

## [1.0.1] - 2019-07-06

### Security

- Fix some vulnerabilities by upgrading to the latest versions of `mocha` and `tslint`

## [1.0.0] - 2019-03-03

### Added
- `id(object)` to retrieve IDs
- `has(object, number)` to compare objects with IDs
- `clear()` to clear the object ID store
- TypeScript declaration file
- Webpack configuration with minification
- IDE configuration files
- NPM Scripts for testing, building, linting and publishing
- TSLint (Standard code style)
  - Minor adjustments for better readability
- Mocha tests
- README documentation

### Changed
- License is now the Unlicense (previously MIT)

<!-- General references -->
[KEEP-A-CHANGELOG]: https://keepachangelog.com/en/1.1.0/
[SEMVER]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->
[Unreleased]: https://github.com/axaptional/electron-ipc/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/axaptional/electron-ipc/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/axaptional/electron-ipc/releases/tag/v1.0.0
