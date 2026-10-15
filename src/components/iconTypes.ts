import React from 'react';

/**
 * Icon components come from react-native-heroicons (solid set). Their prop
 * surface is the full SvgProps union, so the loose component type keeps the
 * call sites free of casts.
 */
export type IconComponent = React.ComponentType<any>;
