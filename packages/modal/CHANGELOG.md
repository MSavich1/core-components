# Change Log

## 6.1.8

### Patch Changes

-   Обновлены зависимости
    -   mq@4.1.2

## 6.1.7

### Patch Changes

-   Обновлены зависимости
    -   button@7.0.3
    -   icon-button@6.0.4

## 6.1.6

### Patch Changes

-   Обновлены зависимости
    -   icon-button@6.0.3

## 6.1.5

### Patch Changes

### [#396](https://github.com/core-ds/core-components/pull/396)

-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях

## 6.1.4

### Patch Changes

### [#418](https://github.com/core-ds/core-components/pull/418)

-   Исправлена проблема с default-импортом в cjs форматах

-   Обновлены зависимости
    -   base-modal@5.0.7
    -   button@7.0.2
    -   icon-button@6.0.2
    -   mq@4.1.1

## 6.1.3

### Patch Changes

### [#394](https://github.com/core-ds/core-components/pull/394)

-   Исправлена генерация типов в .d.ts

## 6.1.2

### Patch Changes

-   Обновлены зависимости
    -   mq@4.1.0

## 6.1.1

### Patch Changes

-   Обновлены зависимости
    -   base-modal@5.0.6

## 6.1.0

### Minor Changes

### [#329](https://github.com/core-ds/core-components/pull/329)

-   Добавлен z-index к липкому header

## 6.0.12

### Patch Changes

### [#352](https://github.com/core-ds/core-components/pull/352)

-   Исправлена ошибка в ModalResponsive, из-за которой сбрасывалось состояние у дочерник компонентов при переключении desktop -> mobile и наоборот

-   Обновлены зависимости
    -   button@7.0.1
    -   icon-button@6.0.1

## 6.0.11

### Patch Changes

-   Обновлены зависимости
    -   base-modal@5.0.5

## 6.0.10

### Patch Changes

### [#292](https://github.com/core-ds/core-components/pull/292)

-   Новые стили кнопок в теме default
-   Новый вид состояния loading во всех темах (Loader заменён на Spinner)<br />
-   Исправлена высота кнопки ghost в размерах s/m/l/xl (увеличилась на 4px)<br />
-   Исправлена ширина кнопок secondary/tertiary (уменьшилась на 2px)<br />

-   Обновлены зависимости
    -   button@7.0.0
    -   icon-button@6.0.0

## 6.0.9

### Patch Changes

### [#307](https://github.com/core-ds/core-components/pull/307)

-   Добавили зависимость @alfalab/icons-glyph в компонент Modal

*   Обновлены зависимости
    -   base-modal@5.0.4

## 6.0.8

### Patch Changes

### [#301](https://github.com/core-ds/core-components/pull/301)

-   Исправлена ошибка, из-за которой не рендерился контент CalendarMobile в iOS < 13.4

## 6.0.7

### Patch Changes

-   Updated dependencies [[#282](https://github.com/core-ds/core-components/pull/282)]
    -   @alfalab/core-components-button@6.1.2
    -   @alfalab/core-components-icon-button@5.0.5

## 6.0.6

### Patch Changes

-   [#261](https://github.com/core-ds/core-components/pull/261): Обновлены внутренние зависимости. Thanks [@Lacronts](https://github.com/Lacronts)

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@6.0.4...@alfalab/core-components-modal@6.0.5) (2022-09-13)

**Note:** Version bump only for package @alfalab/core-components-modal

## [6.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@6.0.3...@alfalab/core-components-modal@6.0.4) (2022-09-12)

**Note:** Version bump only for package @alfalab/core-components-modal

## [6.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@6.0.2...@alfalab/core-components-modal@6.0.3) (2022-09-02)

### Bug Fixes

-   temporary fix for non-existing types ([#237](https://github.com/core-ds/core-components/issues/237)) ([cadb48c](https://github.com/core-ds/core-components/commit/cadb48cdc966690ceb26ed3f6c74f1af2481b6b0))

## [6.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@6.0.1...@alfalab/core-components-modal@6.0.2) (2022-08-31)

**Note:** Version bump only for package @alfalab/core-components-modal

## [6.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@6.0.0...@alfalab/core-components-modal@6.0.1) (2022-08-19)

**Note:** Version bump only for package @alfalab/core-components-modal

# [6.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.4.2...@alfalab/core-components-modal@6.0.0) (2022-08-17)

### Features

-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))

### BREAKING CHANGES

-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена
    директория dist)

Co-authored-by: Vladimir Gevak <VGevak@alfabank.ru>

## [5.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.4.1...@alfalab/core-components-modal@5.4.2) (2022-08-17)

### Bug Fixes

-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))

## [5.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.4.0...@alfalab/core-components-modal@5.4.1) (2022-08-11)

**Note:** Version bump only for package @alfalab/core-components-modal

# [5.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.3.0...@alfalab/core-components-modal@5.4.0) (2022-08-09)

### Features

-   **modal:** добавлен dataTestId для элементов компонента ([151ff8c](https://github.com/core-ds/core-components/commit/151ff8c5220d794719f90c1bdabedb905db841a7))

# [5.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.8...@alfalab/core-components-modal@5.3.0) (2022-08-04)

### Features

-   **modal:** add props breakpoint for modal responsive ([#173](https://github.com/core-ds/core-components/issues/173)) ([e835052](https://github.com/core-ds/core-components/commit/e835052c45b4fa2d9d1c8c6401929b0be7088f48))
-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))

## [5.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.7...@alfalab/core-components-modal@5.2.8) (2022-07-25)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.6...@alfalab/core-components-modal@5.2.7) (2022-07-18)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.5...@alfalab/core-components-modal@5.2.6) (2022-07-15)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.4...@alfalab/core-components-modal@5.2.5) (2022-07-15)

### Bug Fixes

-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))

## [5.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.3...@alfalab/core-components-modal@5.2.4) (2022-07-14)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.2...@alfalab/core-components-modal@5.2.3) (2022-07-11)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.1...@alfalab/core-components-modal@5.2.2) (2022-07-01)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.2.0...@alfalab/core-components-modal@5.2.1) (2022-06-30)

**Note:** Version bump only for package @alfalab/core-components-modal

# [5.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.1.5...@alfalab/core-components-modal@5.2.0) (2022-06-28)

### Features

-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))

## [5.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.1.4...@alfalab/core-components-modal@5.1.5) (2022-06-24)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.1.3...@alfalab/core-components-modal@5.1.4) (2022-06-23)

### Bug Fixes

-   **button:** fix color secondary ([#92](https://github.com/core-ds/core-components/issues/92)) ([57b8e66](https://github.com/core-ds/core-components/commit/57b8e661b8f54acdfd0c235f58ebd59d66c116a4))

## [5.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.1.2...@alfalab/core-components-modal@5.1.3) (2022-06-20)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.1.1...@alfalab/core-components-modal@5.1.2) (2022-06-03)

**Note:** Version bump only for package @alfalab/core-components-modal

## [5.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@5.0.0...@alfalab/core-components-modal@5.0.1) (2022-03-28)

### Bug Fixes

-   fix modal and bottom-sheet dark mode ([#1043](https://github.com/core-ds/core-components/issues/1043)) ([cad36a2](https://github.com/core-ds/core-components/commit/cad36a25b28bfa71296c3dd9dc325eec28b5c241))

# [5.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.2.0...@alfalab/core-components-modal@5.0.0) (2022-03-24)

### Features

-   **modal:** update styles ([#1024](https://github.com/core-ds/core-components/issues/1024)) ([fdf2cdc](https://github.com/core-ds/core-components/commit/fdf2cdca9f785b27cd5d3998245a34d42e1240d1))

### BREAKING CHANGES

-   **modal:** Большое обновление стилей и темизации

-   fix(modal): remove unused align

# [4.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.1.0...@alfalab/core-components-modal@4.2.0) (2022-03-04)

### Features

-   **modal:** mobile header ([#1018](https://github.com/core-ds/core-components/issues/1018)) ([54b879f](https://github.com/core-ds/core-components/commit/54b879f500d1124a6956d3d5a57349c856a09904))

# [4.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.7...@alfalab/core-components-modal@4.1.0) (2022-03-01)

### Features

-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))

## [4.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.6...@alfalab/core-components-modal@4.0.7) (2022-02-15)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.5...@alfalab/core-components-modal@4.0.6) (2022-02-09)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.4...@alfalab/core-components-modal@4.0.5) (2022-02-03)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.3...@alfalab/core-components-modal@4.0.4) (2022-02-02)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.2...@alfalab/core-components-modal@4.0.3) (2022-01-17)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.1...@alfalab/core-components-modal@4.0.2) (2021-12-29)

**Note:** Version bump only for package @alfalab/core-components-modal

## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@4.0.0...@alfalab/core-components-modal@4.0.1) (2021-12-14)

**Note:** Version bump only for package @alfalab/core-components-modal

# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@3.0.2...@alfalab/core-components-modal@4.0.0) (2021-12-08)

-   fix!: новый cdn иконок (#913) (#917) ([224831f](https://github.com/core-ds/core-components/commit/224831f41ed2de49dc1a228dc081b0629cf274b1)), closes [#913](https://github.com/core-ds/core-components/issues/913) [#917](https://github.com/core-ds/core-components/issues/917)

### BREAKING CHANGES

-   Добавьте новый домен в список разрешенных 'img-src': `'self' alfabank.gcdn.co data: 'self'`

This reverts commit 953fbcfec46a40089a5cfde670597315269b05f5.

## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@3.0.1...@alfalab/core-components-modal@3.0.2) (2021-12-08)

### Bug Fixes

-   revert 0e8124552206f96149d104f65cff1667e857bf01 ([#916](https://github.com/core-ds/core-components/issues/916)) ([953fbcf](https://github.com/core-ds/core-components/commit/953fbcfec46a40089a5cfde670597315269b05f5))

## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@3.0.0...@alfalab/core-components-modal@3.0.1) (2021-12-08)

### Bug Fixes

-   новый cdn иконок ([#913](https://github.com/core-ds/core-components/issues/913)) ([0e81245](https://github.com/core-ds/core-components/commit/0e8124552206f96149d104f65cff1667e857bf01))

# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.8...@alfalab/core-components-modal@3.0.0) (2021-11-26)

### Features

-   **button:** добавлена кнопка размера 40px, изменены скругления ([#886](https://github.com/core-ds/core-components/issues/886)) ([88e657a](https://github.com/core-ds/core-components/commit/88e657a9f0f68b8b58f6e9437053954ee984f83c)), closes [#890](https://github.com/core-ds/core-components/issues/890)

### BREAKING CHANGES

-   **button:** Кнопка размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо
    заменить размер на xxs. Можно воспользоваться codemod.

-   feat(codemod): add button xs to xxs transformer

-   feat(tag): добавлен тэг размера 40px, изменены отступы

Добавлен тэг размером 40px, изменены отступы. Тем, кто использовал размер xs, надо заменить размер
на xxs.

-   **button:** Тэг размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо
    заменить размер на xxs. Можно воспользоваться codemod.

-   test: update screenshots

-   test: update screenshots

-   feat(button): linter fix

-   feat(button): fix min-width

-   feat(tag): remove vertical paddings

-   feat(tag): remove vertical paddings

-   feat(button): updates

## [2.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.7...@alfalab/core-components-modal@2.0.8) (2021-11-08)

### Bug Fixes

-   **modal:** add spreading backdrop props ([#870](https://github.com/core-ds/core-components/issues/870)) ([b523426](https://github.com/core-ds/core-components/commit/b52342616adf1f4b227f603264b70474e53c16f8))

## [2.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.6...@alfalab/core-components-modal@2.0.7) (2021-09-14)

**Note:** Version bump only for package @alfalab/core-components-modal

## [2.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.5...@alfalab/core-components-modal@2.0.6) (2021-08-27)

**Note:** Version bump only for package @alfalab/core-components-modal

## [2.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.4...@alfalab/core-components-modal@2.0.5) (2021-08-11)

### Bug Fixes

-   **modal:** max-width 100% ([#794](https://github.com/core-ds/core-components/issues/794)) ([793a765](https://github.com/core-ds/core-components/commit/793a765e7d5dc251eee810acde4605e139565906))

## [2.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.3...@alfalab/core-components-modal@2.0.4) (2021-08-04)

**Note:** Version bump only for package @alfalab/core-components-modal

## [2.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.2...@alfalab/core-components-modal@2.0.3) (2021-07-23)

**Note:** Version bump only for package @alfalab/core-components-modal

## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.1...@alfalab/core-components-modal@2.0.2) (2021-07-19)

**Note:** Version bump only for package @alfalab/core-components-modal

## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@2.0.0...@alfalab/core-components-modal@2.0.1) (2021-07-09)

**Note:** Version bump only for package @alfalab/core-components-modal

# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.6...@alfalab/core-components-modal@2.0.0) (2021-07-08)

### Features

-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))

## [1.5.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.5...@alfalab/core-components-modal@1.5.6) (2021-07-02)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.5.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.4...@alfalab/core-components-modal@1.5.5) (2021-06-28)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.5.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.3...@alfalab/core-components-modal@1.5.4) (2021-06-04)

### Bug Fixes

-   **modal:** header height & paddings ([#676](https://github.com/core-ds/core-components/issues/676)) ([d8945c6](https://github.com/core-ds/core-components/commit/d8945c6839b059325ad2a90ca4fc6eda2da3b4c2))

## [1.5.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.2...@alfalab/core-components-modal@1.5.3) (2021-05-31)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.5.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.1...@alfalab/core-components-modal@1.5.2) (2021-05-28)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.5.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.5.0...@alfalab/core-components-modal@1.5.1) (2021-05-25)

**Note:** Version bump only for package @alfalab/core-components-modal

# [1.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.4.3...@alfalab/core-components-modal@1.5.0) (2021-05-25)

### Bug Fixes

-   **modal:** fix styles ([#665](https://github.com/core-ds/core-components/issues/665)) ([06f3615](https://github.com/core-ds/core-components/commit/06f3615c532f8ec2932d8a4d1fcbb1f5ee6b6a30))

### Features

-   **modal:** add layout to footer ([#644](https://github.com/core-ds/core-components/issues/644)) ([eb5a66e](https://github.com/core-ds/core-components/commit/eb5a66ef928df663f4ad0fe048b5d3097b4f4b72))

## [1.4.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.4.2...@alfalab/core-components-modal@1.4.3) (2021-05-18)

### Bug Fixes

-   **modal:** click theme sticky footer bg ([#641](https://github.com/core-ds/core-components/issues/641)) ([215a155](https://github.com/core-ds/core-components/commit/215a155030d9966508afa1b8ee8059cc422a2765))

## [1.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.4.1...@alfalab/core-components-modal@1.4.2) (2021-05-07)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.4.0...@alfalab/core-components-modal@1.4.1) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-modal

# [1.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.3.2...@alfalab/core-components-modal@1.4.0) (2021-04-26)

### Features

-   **modal:** fixed position ([#617](https://github.com/core-ds/core-components/issues/617)) ([77db054](https://github.com/core-ds/core-components/commit/77db054b18c1dba6713d9a9d99c95a1ef5c98e8e))

## [1.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.3.1...@alfalab/core-components-modal@1.3.2) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.3.0...@alfalab/core-components-modal@1.3.1) (2021-04-09)

**Note:** Version bump only for package @alfalab/core-components-modal

# [1.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.8...@alfalab/core-components-modal@1.3.0) (2021-04-09)

### Features

-   **backdrop:** add component ([948a6c2](https://github.com/core-ds/core-components/commit/948a6c2fb5ec58edb2d087691ce4713d75da6e35))

## [1.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.7...@alfalab/core-components-modal@1.2.8) (2021-04-01)

### Bug Fixes

-   **modal:** fullscreen & header title styles ([#580](https://github.com/core-ds/core-components/issues/580)) ([39fa494](https://github.com/core-ds/core-components/commit/39fa4940223b6187a391ff6c0b6706ae8a333dc0))

## [1.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.6...@alfalab/core-components-modal@1.2.7) (2021-03-30)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.5...@alfalab/core-components-modal@1.2.6) (2021-03-24)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.4...@alfalab/core-components-modal@1.2.5) (2021-03-19)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.2...@alfalab/core-components-modal@1.2.4) (2021-03-18)

### Bug Fixes

-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))

## [1.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.2.0...@alfalab/core-components-modal@1.2.2) (2021-03-16)

### Bug Fixes

-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))

# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.7...@alfalab/core-components-modal@1.2.0) (2021-03-15)

### Features

-   **vars:** introducing border-radius vars ([1a6fb28](https://github.com/core-ds/core-components/commit/1a6fb287bcfab50048c3a9100645b4dee8cd3395))

## [1.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.6...@alfalab/core-components-modal@1.1.7) (2021-03-14)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.5...@alfalab/core-components-modal@1.1.6) (2021-03-10)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.4...@alfalab/core-components-modal@1.1.5) (2021-03-04)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.3...@alfalab/core-components-modal@1.1.4) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.2...@alfalab/core-components-modal@1.1.3) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.1...@alfalab/core-components-modal@1.1.2) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-modal

## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.1.0...@alfalab/core-components-modal@1.1.1) (2021-02-20)

**Note:** Version bump only for package @alfalab/core-components-modal

# [1.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.0.1...@alfalab/core-components-modal@1.1.0) (2021-02-19)

### Features

-   **modal:** reinvent modal ([#489](https://github.com/core-ds/core-components/issues/489)) ([06cb8ba](https://github.com/core-ds/core-components/commit/06cb8ba7f7a09445c04ab2a9871a86c1abf4a79c))

## [1.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-modal@1.0.0...@alfalab/core-components-modal@1.0.1) (2021-02-18)

**Note:** Version bump only for package @alfalab/core-components-modal
