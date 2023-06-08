import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatfrom from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface PlatformSelectorProps {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector: FunctionComponent<PlatformSelectorProps> = ({
  selectedPlatformId,
  onSelectPlatform,
}) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatfrom(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
